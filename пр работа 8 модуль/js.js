document.addEventListener('DOMContentLoaded', function() {
    const dogCards = document.querySelectorAll('.dogcard');
    
    // Создаем элементы для всплывающего окна и затемнения
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const infoBox = document.createElement('div');
    infoBox.className = 'info-box';
    document.body.appendChild(infoBox);

    // Добавляем обработчик клика для каждой карточки
    dogCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h2').textContent;
            const description = this.querySelector('p').textContent;
            
            let additionalInfo = 'Ла́йка — собака-космонавт, первое животное, выведенное на орбиту Земли. Была запущена в космос 3 ноября 1957 года в половине шестого утра по московскому времени на советском корабле «Спутник-2». На тот момент Лайке было около трёх лет. Возвращение Лайки на Землю конструкцией космического аппарата не предусматривалось.';
            if (title.includes('лабрадор')) {
                additionalInfo = 'Лабрадоры родом из Канады. Средний вес: 25-36 кг. Продолжительность жизни: 10-14 лет.';
            } else if (title.includes('овчарка')) {
                additionalInfo = 'Немецкие овчарки известны своей преданностью. Средний вес: 22-40 кг. Продолжительность жизни: 9-13 лет.';
            }

            else if (title.includes('чихуахуа')) {
                additionalInfo = 'Чихуа́хуа — собака-компаньон. Считается самой маленькой собакой в мире и носит имя мексиканского штата Чиуауа. Есть предположение, что предки этой собаки жили в дикой природе, и в эпоху цивилизации тольтеков были одомашнены ими. Имеет компактный корпус и отличается бойким и смелым характером.';
            }
            
            
            infoBox.innerHTML = `
                <h2>${title}</h2>
                <p>${description}</p>
                <p><strong>Дополнительно:</strong> ${additionalInfo}</p>
                <button>Закрыть</button>
            `;
            infoBox.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // Закрытие при клике на кнопку или вне окна
    document.addEventListener('click', function(e) {
        if (e.target.closest('button') || e.target === overlay) {
            infoBox.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});




