
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

// Function to add the crossing out effect to a checkbox
function addCrossingOutEffect(checkbox, listItem) {
    checkbox.addEventListener('change', function() {
        const taskText = listItem.querySelector('p'); // Select the <p> element within the same .list-item
        
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
    });
}

// Add event listeners to all existing checkboxes for Habits
const habitCheckboxes = document.querySelectorAll('.habits .checkbox-label input[type="checkbox"]');
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

        const taskText = document.createElement('p');
        taskText.textContent =habitTaskInput.value;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(taskText);

        // Add the crossing out effect to the newly created checkbox for Weeklies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Weeklies
        const habitChecklist = document.getElementById('habit-checklist');
        habitChecklist.appendChild(listItem);

        // Clear the input field for Weeklies
        habitTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;
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

        const taskText = document.createElement('p');
        taskText.textContent = dailyTaskInput.value;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(taskText);

        // Add the crossing out effect to the newly created checkbox for Weeklies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Weeklies
        const dailyChecklist = document.getElementById('daily-checklist');
        dailyChecklist.appendChild(listItem);

        // Clear the input field for Weeklies
        dailyTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;
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

        const taskText = document.createElement('p');
        taskText.textContent = weeklyTaskInput.value;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(taskText);

        // Add the crossing out effect to the newly created checkbox for Weeklies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Weeklies
        const weeklyChecklist = document.getElementById('weekly-checklist');
        weeklyChecklist.appendChild(listItem);

        // Clear the input field for Weeklies
        weeklyTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;
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

        const taskText = document.createElement('p');
        taskText.textContent = monthlyTaskInput.value;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(taskText);

        // Add the crossing out effect to the newly created checkbox for Monthlies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Monthlies
        const monthlyChecklist = document.getElementById('monthly-checklist');
        monthlyChecklist.appendChild(listItem);

        // Clear the input field for Monthlies
        monthlyTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;
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

        const taskText = document.createElement('p');
        taskText.textContent = goalTaskInput.value;

        // Append elements to build the checklist item
        checkboxLabel.appendChild(checkbox);
        listItem.appendChild(checkboxLabel);
        listItem.appendChild(taskText);

        // Add the crossing out effect to the newly created checkbox for Weeklies
        addCrossingOutEffect(checkbox, listItem);

        // Append the checklist item to the checklist container for Weeklies
        const goalChecklist = document.getElementById('goal-checklist');
        goalChecklist.appendChild(listItem);

        // Clear the input field for Weeklies
        goalTaskInput.value = '';

        // Increment the counter variable for the next item
        itemIdCounter++;
    }
});

// ! use dropdown buttons
// Function to toggle visibility of the container based on dropdown click
function toggleContainerVisibility(dropdownId, containerId) {
    const dropdownButton = document.getElementById(dropdownId);
    const container = document.getElementById(containerId);

    dropdownButton.addEventListener('click', function () {
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'grid'; // Show the container
        } else {
            container.style.display = 'none'; // Hide the container
        }
    });
}

// Add event listeners for each dropdown and its corresponding container
toggleContainerVisibility('habit-dropdown', 'habit-checklist');
toggleContainerVisibility('daily-dropdown', 'daily-checklist');
toggleContainerVisibility('weekly-dropdown', 'weekly-checklist');
toggleContainerVisibility('monthly-dropdown', 'monthly-checklist');
toggleContainerVisibility('goal-dropdown', 'goal-checklist');

// ! Setup my local storage Json file 
// Function to check if local storage is empty
function hasDesiredStructure() {
    const desiredKeys = ["Habits", "Goals", "Daylies", "Weeklies", "Monthlies"];
    
    for (const key of desiredKeys) {
        if (!localStorage.hasOwnProperty(key)) {
            return false;
        }
    }
    
    return true;
}

// Function to write data to local storage
function writeDataToLocalStorage(dataKey, data) {
    localStorage.setItem(dataKey, JSON.stringify(data));
    console.log('Data has been written to local storage.');
}

// Specify the data key for your current data
const dataKey = 'currentData';

// Read local storage and check if it's empty
if (!hasDesiredStructure()) {
    // Define the initial data
    const initialData = {
        "Habits": {},
        "Goals": {},
        "Daylies": {},
        "Weeklies": {},
        "Monthlies": {}
    };

    // Write the initial data to local storage
    writeDataToLocalStorage(dataKey, initialData);
} else {
    console.log('Local storage is not empty. No action taken.');
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}