window.onload = function () {
    let taskName = '';
    document.querySelector('.btn').addEventListener("click", function () {
        taskName = document.querySelector('input').value;
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
        document.querySelector('.container').appendChild(div);
        document.querySelector('input').value = '';
    });

    document.addEventListener('click', function (e) {
        if (e.target.dataset.name != '' && e.target.dataset.name != undefined && e.target.dataset.name != null) {
            //delete element as the task is completed
            console.log(e.target.dataset.name);
            document.querySelector('[data-taskname="' + e.target.dataset.name + '"]').remove();
        }
    })
}
