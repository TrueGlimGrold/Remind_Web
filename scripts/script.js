document.querySelector('.background-border').addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
});


for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

// ! Functions for saving and loading items from Json

function saveChecklistData() {


    const dataToSave = {
        habits: [],
        daylies: [],
        weeklies: [],
        monthlies: [],
        goals: [],
    };

    // Collect data from each checklist and store it in dataToSave
    const collectChecklistData = function(category, checklistSelector) { 
        const checkboxes = document.querySelectorAll(`.${category} ${checklistSelector} .checkbox-label input[type="checkbox"]`);
        checkboxes.forEach(function(checkbox) {
            const listItem = checkbox.closest('.list-item');
            const taskText = listItem.querySelector('span').textContent;
            const completed = checkbox.checked;

            dataToSave[category].push({ name:taskText, completed: completed });
        });
    };

    collectChecklistData('habits', '#habit-checklist');
    collectChecklistData('daylies', '#daily-checklist');
    collectChecklistData('weeklies', '#weekly-checklist');
    collectChecklistData('monthlies', '#monthly-checklist');
    collectChecklistData('goals', '#goal-checklist');

    // Save the data to localStorage
    localStorage.setItem('checklistData', JSON.stringify(dataToSave));

}

// Function to load checklist data from localStorage
function loadChecklistData() {


    const data = localStorage.getItem('checklistData');
    if (data) {
        const parsedData = JSON.parse(data);

        // Load data into each checklist
        const loadChecklist = function(category, checklistSelector) {
            const checklist = document.querySelector(`.${category} ${checklistSelector}`);
            parsedData[category].forEach(function(item) {
                const listItem = document.createElement('div');
                listItem.classList.add('list-item');
                const checkboxLabel = document.createElement('label');
                checkboxLabel.classList.add('checkbox-label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                const taskText = document.createElement('span');
                taskText.textContent = item.name;
                const deleteButton = document.createElement("button");
                deleteButton.classList.add("delete-button")
                deleteButton.textContent = "×"
                checkboxLabel.appendChild(checkbox);
                checkboxLabel.appendChild(taskText);
                listItem.appendChild(checkboxLabel);
                listItem.appendChild(deleteButton);
                addCrossingOutEffect(checkbox, listItem);
                checklist.appendChild(listItem);
                itemIdCounter++;


                checkbox.checked = item.completed;
                if (item.completed == true) {
                    taskText.style.textDecoration = 'line-through';
                    taskText.style.textDecorationColor = 'white'; // Set your desired color here
                    taskText.style.color = 'grey'; // Set your desired text color here
                    listItem.style.borderColor = 'grey';
                    listItem.style.backgroundColor = "rgb(15, 15, 15)";
                }
            });
        };

        loadChecklist('habits', '#habit-checklist');
        loadChecklist('daylies', '#daily-checklist');
        loadChecklist('weeklies', '#weekly-checklist');
        loadChecklist('monthlies', '#monthly-checklist');
        loadChecklist('goals', '#goal-checklist');

        // Crossing out completed checkboxes 
    }
}

window.addEventListener('load', loadChecklistData);


// ! Open Task creatrion
// Function to toggle task creation div based on button click
function toggleTaskCreation(target) {
    const taskCreationDiv = document.getElementById(`${target}-creation`);
    if (taskCreationDiv) {
        if (taskCreationDiv.style.display === 'none' || taskCreationDiv.style.display === '') {
            taskCreationDiv.style.display = 'flex';
        } else {
            taskCreationDiv.style.display = 'none';
        }
    }
}

// Add event listeners to each button
document.getElementById('add-habit-button').addEventListener('click', function () {
    toggleTaskCreation('habit');
});

document.getElementById('add-goal-button').addEventListener('click', function () {
    toggleTaskCreation('goal');
});

document.getElementById('add-daily-button').addEventListener('click', function () {
    toggleTaskCreation('daily');
});

document.getElementById('add-weekly-button').addEventListener('click', function () {
    toggleTaskCreation('weekly');
});

document.getElementById('add-monthly-button').addEventListener('click', function () {
    toggleTaskCreation('monthly');
});

// ! Create a task

// Get references to the input field and checklist container
const taskInput = document.getElementById('task-input');
const checklist = document.getElementById('checklist');

// Initialize a counter variable
let itemIdCounter = 1;

// Add event listeners to all existing checkboxes for Habits
const habitCheckboxes = document.querySelectorAll('.habit .checkbox-label input[type="checkbox"]');
habitCheckboxes.forEach(function(checkbox) {
    const listItem = checkbox.closest('.list-item');
    addCrossingOutEffect(checkbox, listItem);
});

// Add event listeners to all existing checkboxes for Daylies
const dailyCheckboxes = document.querySelectorAll('.daylies .checkbox-label input[type="checkbox"]');
dailyCheckboxes.forEach(function(checkbox) {
    const listItem = checkbox.closest('.list-item');
    addCrossingOutEffect(checkbox, listItem);
});

// Add event listeners to all existing checkboxes for Weeklies
const weeklyCheckboxes = document.querySelectorAll('.weeklies .checkbox-label input[type="checkbox"]');
weeklyCheckboxes.forEach(function(checkbox) {
    const listItem = checkbox.closest('.list-item');
    addCrossingOutEffect(checkbox, listItem);
});

// Add event listeners to all existing checkboxes for Monthlies
const monthlyCheckboxes = document.querySelectorAll('.monthlies .checkbox-label input[type="checkbox"]');
monthlyCheckboxes.forEach(function(checkbox) {
    const listItem = checkbox.closest('.list-item');
    addCrossingOutEffect(checkbox, listItem);
});

// Add event listeners to all existing checkboxes for Goals
const goalCheckboxes = document.querySelectorAll('.goals .checkbox-label input[type="checkbox"]');
goalCheckboxes.forEach(function(checkbox) {
    const listItem = checkbox.closest('.list-item');
    addCrossingOutEffect(checkbox, listItem);
});

// Add an event listener to the input field for Habits
const habitTaskInput = document.getElementById('habit-task-input');
habitTaskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && habitTaskInput.value.trim() !== '') {
        // Create a new checklist item for Weeklies
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        // Generate a unique ID for the list item
        const listItemID = `habit-list-item-${itemIdCounter}`;
        listItem.id = listItemID;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('checkbox-label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskText = document.createElement('span');
        taskText.textContent = habitTaskInput.value;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "×";

        const deleteButtonID = `delete-button-${itemIdCounter}`
        deleteButton.id = deleteButtonID;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        checkboxLabel.appendChild(taskText);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(deleteButton);

        // Add the crossing out effect to the newly created checkbox for Weeklies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Weeklies
        const habitChecklist = document.getElementById('habit-checklist');
        habitChecklist.appendChild(listItem);

        // Clear the input field for Weeklies
        habitTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;

        toggleContainerVisibility('habit-dropdown', 'habit-checklist', true);

        saveChecklistData(); // ?
    }
});

// Add an event listener to the input field for Daylies
const dailyTaskInput = document.getElementById('daily-task-input');
dailyTaskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && dailyTaskInput.value.trim() !== '') {
        // Create a new checklist item for Weeklies
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        // Generate a unique ID for the list item
        const listItemID = `daily-list-item-${itemIdCounter}`;
        listItem.id = listItemID;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('checkbox-label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskText = document.createElement('span');
        taskText.textContent = dailyTaskInput.value;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "×";

        const deleteButtonID = `delete-button-${itemIdCounter}`
        deleteButton.id = deleteButtonID;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        checkboxLabel.appendChild(taskText);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(deleteButton);

        // Add the crossing out effect to the newly created checkbox for Weeklies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Weeklies
        const dailyChecklist = document.getElementById('daily-checklist');
        dailyChecklist.appendChild(listItem);

        // Clear the input field for Weeklies
        dailyTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;

        toggleContainerVisibility('daily-dropdown', 'daily-checklist', true);

        saveChecklistData(); // ?
    }
});

// Add an event listener to the input field for Weeklies
const weeklyTaskInput = document.getElementById('weekly-task-input');
weeklyTaskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && weeklyTaskInput.value.trim() !== '') {
        // Create a new checklist item for Weeklies
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        // Generate a unique ID for the list item
        const listItemID = `weekly-list-item-${itemIdCounter}`;
        listItem.id = listItemID;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('checkbox-label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskText = document.createElement('span');
        taskText.textContent = weeklyTaskInput.value;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "×";

        const deleteButtonID = `delete-button-${itemIdCounter}`
        deleteButton.id = deleteButtonID;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        checkboxLabel.appendChild(taskText);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(deleteButton);

        // Add the crossing out effect to the newly created checkbox for Weeklies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Weeklies
        const weeklyChecklist = document.getElementById('weekly-checklist');
        weeklyChecklist.appendChild(listItem);

        // Clear the input field for Weeklies
        weeklyTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;

        toggleContainerVisibility('weekly-dropdown', 'weekly-checklist', true);

        saveChecklistData(); // ?
    }
});

// Add an event listener to the input field for Monthlies
const monthlyTaskInput = document.getElementById('monthly-task-input');
monthlyTaskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && monthlyTaskInput.value.trim() !== '') {
        // Create a new checklist item for Monthlies
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        // Generate a unique ID for the list item
        const listItemID = `monthly-list-item-${itemIdCounter}`;
        listItem.id = listItemID;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('checkbox-label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskText = document.createElement('span');
        taskText.textContent = monthlyTaskInput.value;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "×";

        const deleteButtonID = `delete-button-${itemIdCounter}`
        deleteButton.id = deleteButtonID;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        checkboxLabel.appendChild(taskText);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(deleteButton);

        // Add the crossing out effect to the newly created checkbox for Monthlies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Monthlies
        const monthlyChecklist = document.getElementById('monthly-checklist');
        monthlyChecklist.appendChild(listItem);

        // Clear the input field for Monthlies
        monthlyTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;

        toggleContainerVisibility('monthly-dropdown', 'monthly-checklist', true);

        saveChecklistData(); // ?
    }
});

// Add an event listener to the input field for Goals
const goalTaskInput = document.getElementById('goal-task-input');
goalTaskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && goalTaskInput.value.trim() !== '') {
        // Create a new checklist item for Weeklies
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        // Generate a unique ID for the list item
        const listItemID = `goal-list-item-${itemIdCounter}`;
        listItem.id = listItemID;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('checkbox-label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskText = document.createElement('span');
        taskText.textContent = goalTaskInput.value;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button")
        deleteButton.textContent = "×";

        const deleteButtonID = `delete-button-${itemIdCounter}`
        deleteButton.id = deleteButtonID;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        checkboxLabel.appendChild(taskText);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(deleteButton);

        // Add the crossing out effect to the newly created checkbox for Weeklies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Weeklies
        const goalChecklist = document.getElementById('goal-checklist');
        goalChecklist.appendChild(listItem);

        // Clear the input field for Weeklies
        goalTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;

        toggleContainerVisibility('goal-dropdown', 'goal-checklist', true);

        saveChecklistData();
    }
});

// ! Delete button / crossing out effect
// Function to add the crossing out effect to a checkbox and set up delete button
function addCrossingOutEffect(checkbox, listItem) {
    const checkboxVariable = listItem.querySelector('label');
    const taskText = checkboxVariable.querySelector('span'); // Select the <span> element within the same .list-item
    const deleteButton = listItem.querySelector('.delete-button'); // Select the delete button

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
        listItem.remove(); // Remove the parent list item when the delete button is clicked
        saveChecklistData(); // Save the updated checklist data
    });
    
// Crossing out effect here
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
            taskText.style.textDecorationColor = 'white'; // Set your desired color here
            taskText.style.color = 'grey'; // Set your desired text color here
            listItem.style.borderColor = 'grey';
            listItem.style.backgroundColor = "rgb(15, 15, 15)";
        } else {
            taskText.style.textDecoration = 'none';
            taskText.style.textDecorationColor = 'initial'; // Reset text decoration color to its default
            taskText.style.color = 'rgb(150, 0, 0)'; // Reset text color to its default
            listItem.style.borderColor = 'rgb(100, 60, 60)'; // Reset border color to its default
            listItem.style.backgroundColor = 'rgb(5, 15, 25)'; // Reset background color to its default
        }

        saveChecklistData(); // Save the updated checklist data
    });
}

// ! use dropdown buttons
// Function to toggle visibility of the container based on dropdown click
function toggleContainerVisibility(dropdownId, containerId, openOnly=false) {

    const dropdownButton = document.getElementById(dropdownId);
    const container = document.getElementById(containerId);

    if (openOnly == false) {
        dropdownButton.addEventListener('click', function () {
            if (container.style.display === 'none' || container.style.display === '') {
                container.style.display = 'grid'; // Show the container
            } else {
                container.style.display = 'none'; // Hide the container
            }
        });
    } else {
        container.style.display = 'grid'; // Show the container
    }
}

// Add event listeners for each dropdown and its corresponding container
toggleContainerVisibility('habit-dropdown', 'habit-checklist');
toggleContainerVisibility('daily-dropdown', 'daily-checklist');
toggleContainerVisibility('weekly-dropdown', 'weekly-checklist');
toggleContainerVisibility('monthly-dropdown', 'monthly-checklist');
toggleContainerVisibility('goal-dropdown', 'goal-checklist');

