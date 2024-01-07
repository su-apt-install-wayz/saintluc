function handleFormation(option) {
    switch (option) {
        case 'sisr':
            document.getElementById('slam_btn').classList.remove('active');
            document.getElementById('sisr_btn').classList.add('active');

            document.getElementById('slam').classList.remove('active');
            document.getElementById('sisr').classList.add('active');
            break;
        case 'slam':
            document.getElementById('sisr_btn').classList.remove('active');
            document.getElementById('slam_btn').classList.add('active');

            document.getElementById('sisr').classList.remove('active');
            document.getElementById('slam').classList.add('active');
            break;
    }
}