document.getElementById("portfolio-scroll").addEventListener("scroll", function() {
    // Get bounding client rect for each section
    var presentationRect = document.getElementById('presentation').getBoundingClientRect();
    var projectsRect = document.getElementById('projects').getBoundingClientRect();
    var footerRect = document.getElementById('footer').getBoundingClientRect();

    // Hide or show arrowToProjects based on presentation section visibility
    if (presentationRect.top < window.innerHeight && presentationRect.bottom > 0) {
        document.getElementById('arrowToProjects').style.display = 'block';
    } else {
        document.getElementById('arrowToProjects').style.display = 'none';
    }

    // Hide or show arrowToFooter based on projects section visibility
    if (projectsRect.top < window.innerHeight && projectsRect.bottom > 0) {
        document.getElementById('arrowToFooter').style.display = 'block';
    } else {
        document.getElementById('arrowToFooter').style.display = 'none';
    }

    // Check if footer is visible
    if (footerRect.top < window.innerHeight && footerRect.bottom > 0) {
        document.getElementById('arrowToFooter').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('name');
    heading.innerHTML = heading.textContent.split('').map(letter => `<span style="display: inline-block; transform: translateY(-100px); opacity: 0;">${letter}</span>`).join('');
});

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('second-name');
    heading.innerHTML = heading.textContent.split('').map(letter => `<span style="display: inline-block; transform: translateY(-100px); opacity: 0;">${letter}</span>`).join('');
});
