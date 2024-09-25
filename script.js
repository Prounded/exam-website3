document.addEventListener('click', checkInput);

const ALL_URL = {
    'Bahasa Indonesia':     '',
    'Pendidikan Pancasila': 'https://forms.gle/j143QEsf6kebw5FHA',
    'Matematika':           'https://forms.gle/cBKDwRYm4btb5ccYA',
    'Agama Katolik':        'https://forms.gle/MvKmofovaXexLn8v5',
    'Bahasa Inggris':       '',
    'Informatika':          'https://forms.gle/kVHBW6oh5uMm7Zqm6',
    'IPS':                  'https://forms.gle/xMnvEDDGinc694376',
    'PJOK':                 'https://forms.gle/tUXJGwEyMLuY7zj69',
    'Prakarya':             'https://forms.gle/ND17T1Ctymt9qiPq7',
    'Kemarsudirinian':      'https://forms.gle/nLwBuAoUv6MgzSHg7',
    'IPA':                  ''
}

function checkInput(event) {
    if (event.target.classList.contains('examDisplayContainer') || event.target.parentElement.classList.contains('examDisplayContainer')) {
        let theLesson = '';
        if (event.target.lastChild != null) {   
            theLesson = event.target.lastChild.textContent;
        }
        else {
            theLesson = event.target.parentElement.lastChild.textContent;
        }

        if (ALL_URL[theLesson].length > 0) {
            window.location.href = ALL_URL[theLesson];
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Soal Tidak Tersedia",
                text: "Soal sedang dibuat atau memang soal tidak tersedia."
            });
        }
    }
}

function checkDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const dates = currentDate.getDate();
    const hours = currentDate.getHours();

    if (year === 2024 && month === 9 && dates < 20) {
        addExam('day 1');
    }
    else if (year === 2024 && month === 9 && dates === 20) {

        if (hours < 12) {
            addExam('day 1');
        }
        else {
            addExam('day 2');
        }
    }
    else if (year === 2024 && month === 9 && dates > 20 && dates < 23) {
        addExam('day 2');
    }
    else if (year === 2024 && month === 9 && dates === 23) {
        if (hours < 12) {
            addExam('day 2');
        }
        else {
            addExam('day 3');
        }
    }
    else if (year === 2024 && month === 9 && dates === 24) {
        if (hours < 12) {
            addExam('day 3');
        }
        else {
            addExam('day 4');
        }
    }
    else if (year === 2024 && month === 9 && dates === 25) {
        if (hours < 12) {
            addExam('day 4');
        }
        else {
            addExam('day 5');
        }
    }
    else if (year === 2024 && month === 9 && dates === 26) {
        if (hours < 12) {
            addExam('day 5');
        }
        else {
            addExam('day 6');
        }
    }
    else if (year === 2024 && month === 9 && dates === 23) {
        if (hours < 12) {
            addExam('day 6');
        }
        else {
            addExam('exam done');
        }
    }
    else {
        addExam('exam done');
    }
}

function addExam(days) {
    function createDiv(currentExam) {
        if (document.getElementsByClassName('examDisplayContainer').length < 2) { 
            const firstElement = document.getElementsByClassName('examCurrentTitle');
            let execute = true;
            if (firstElement.length > 0) {
                if (firstElement[0].textContent === currentExam) {
                    execute = false;
                } 
            }
            if (execute) {        
                const addDiv = document.createElement('div');
                addDiv.classList.add('examDisplayContainer');
                addDiv.classList.add('examDisplayContainer');
        
                const addImage = document.createElement('img');
                addImage.src = 'takeExamImage.png';
                addImage.classList.add('takeExamImage');
        
                const currentLessons = document.createElement('div');
                currentLessons.classList.add('examCurrentTitle');
                currentLessons.textContent = currentExam;
                
                addDiv.appendChild(addImage);
                addDiv.appendChild(currentLessons);
        
                document.getElementById('examLinkContainer').appendChild(addDiv);
            }
        }
        else {
            const allElement = document.getElementsByClassName('examCurrentTitle');
            if (currentExam != allElement[0].textContent && currentExam != allElement[1].textContent) {
                const allRemove = document.getElementsByClassName('examDisplayContainer');
                for (index = 0; index < allRemove.length; index++){
                    allRemove[index].remove();
                }
            }
        }
    }
    if (days == 'day 1') {
        createDiv('Bahasa Indonesia');
        createDiv('Pendidikan Pancasila');
        document.getElementById('dateDisplay').textContent = 'Jumat, 20 September 2024';
    }
    else if (days == 'day 2') {
        createDiv('Matematika');
        createDiv('Agama Katolik');
        document.getElementById('dateDisplay').textContent = 'Senin, 23 September 2024';
    }
    else if (days == 'day 3') {
        createDiv('Bahasa Inggris');
        createDiv('Informatika');
        document.getElementById('dateDisplay').textContent = 'Selasa, 24 September 2024';
    }
    else if (days == 'day 4') {
        createDiv('IPS');
        createDiv('PJOK');
        document.getElementById('dateDisplay').textContent = 'Rabu, 25 September 2024';
    }
    else if (days == 'day 5') {
        createDiv('Prakarya');
        createDiv('Kemarsudirinian');
        document.getElementById('dateDisplay').textContent = 'Kamis, 26 September 2024';
    }
    else if (days == 'day 6') {
        createDiv('IPA');
        document.getElementById('dateDisplay').textContent = 'Jumat, 27 September 2024';
    }
    else {
        document.getElementById('headerTitle').textContent = 'Ujian Telah Berakhir!';
    }
}

checkDate();
setInterval(checkDate, 1000);
