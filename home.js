window.onload = function () {
    let taskName = '';
    document.querySelector('.btn').addEventListener("click", function () {
        taskName = document.querySelector('.work-input-box').value;
        let div = document.createElement('div');
        div.className = 'task-details';
        div.innerHTML = taskName;
        div.setAttribute('data-taskname', taskName);

        let innerdiv = document.createElement('div');
        innerdiv.className = 'float-right';
        let closeBtn = document.createElement('img');
        closeBtn.src = 'noun_Close_996783.png';
        closeBtn.alt = 'CLOSE';
        closeBtn.height = '20';
        closeBtn.setAttribute('data-name', taskName);

        innerdiv.appendChild(closeBtn);
        div.appendChild(innerdiv);
        document.querySelector('.todo-list').appendChild(div);
        document.querySelector('.work-input-box').value = '';
    });

    document.addEventListener('click', function (e) {
        if (e.target.dataset.name != '' && e.target.dataset.name != undefined && e.target.dataset.name != null) {
            //delete element as the task is completed
            console.log(e.target.dataset.name);
            document.querySelector('[data-taskname="' + e.target.dataset.name + '"]').remove();
        }
    })

    let time = new Date().toLocaleTimeString();
    let name = ""
    if (localStorage.getItem('Name') != null && localStorage.getItem('Name') != undefined && localStorage.getItem('Name') != '')
        name = localStorage.getItem('Name');

    let wish = parseInt(time.split(":")[0]) < 12 ? "Good Morning, <input type='text' value='" + name + "' class='input-box'/>" : "Good Evening, <input type='text'  value='" + name + "' class='input-box'/>";
    let div = document.createElement('div');
    div.innerHTML = wish;
    div.className = "wish";
    document.querySelector('.dynamic-background').appendChild(div);

    function showTime() {
        time = new Date().toLocaleTimeString();
        let zone = parseInt(time.split(":")[0]) < 12 ? " AM" : " PM";
        document.querySelector('.time').innerHTML = time + zone;
        setTimeout(showTime, 1000);
    }

    showTime();

    document.querySelector('.input-box').addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            localStorage.setItem('Name', event.target.value);
        }
    })

}
