document.getElementById('addDateButton').onclick = () => {
    console.log('dddd')
    var newDate = prompt('New period Date?');
    let newObject = {
        'date': newDate,
        'description': false
    };
    displaydateList.push(newObject);
    window.localStorage.setItem('DATES_LIST', JSON.stringify(displaydateList));
    dateList = JSON.parse(window.localStorage.getItem('DATES_LIST'));
    location.reload();
}
document.getElementById('clearDateButton').onclick = () => {
    window.localStorage.removeItem('DATES_LIST');
    location.reload();
}
var dateList = JSON.parse(window.localStorage.getItem('DATES_LIST'));
var dateListParent = document.getElementById('dateListParent');
var displaydateList;
var exampledateList = [
    {
        'date': new Date(),
        'description': 'relaxed'
    },
    {
        'date': new Date(),
        'description': 'sad'
    },
    {
        'date': new Date(),
        'description': 'happy'
    },
    {
        'date': new Date(),
        'description': 'sore'
    }
];
if(dateList) {
    displaydateList = dateList;
} else {
    displaydateList = exampledateList;
}
for(let i = 0; i < displaydateList.length; i++) {
    var tempDiv = document.createElement('div');
    tempDiv.className = 'taskItem';
    console.log(displaydateList[i]);
    tempDiv.classList.add('task-description');
    
    tempDiv.innerHTML = displaydateList[i].date;
    dateListParent.appendChild(tempDiv);
}
var taskItems = document.getElementsByClassName('taskItem');
for(let i = 0; i < taskItems.length; i++) {
    taskItems[i].onclick = () => {
        let itemClickedText = taskItems[i].innerHTML.toLowerCase();
        console.log(itemClickedText);
        for(let j = 0; j < displaydateList.length; j++) {
            if(displaydateList[j].task.toLowerCase() === itemClickedText) {
                displaydateList[j].description = !displaydateList[j].description;
            }
        }
        console.log(displaydateList);
        window.localStorage.setItem('DATE_LIST', JSON.stringify(displaydateList));
        location.reload();
    }
}