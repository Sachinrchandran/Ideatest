// Handle Idea Generation Form
document.getElementById('idea-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const genre = document.getElementById('genre').value;
    const tone = document.getElementById('tone').value;
    const setting = document.getElementById('setting').value;

    const ideaOutput = document.getElementById('idea-output');
    ideaOutput.innerHTML = `<p>Generated Story Idea: A ${tone} ${genre} story set in ${setting}. More details coming soon!</p>`;
});

// Handle Three Act Structure Form
document.getElementById('three-act-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const storyIdea = document.getElementById('story-idea').value;

    const actOutput = document.getElementById('three-act-output');
    actOutput.innerHTML = `<p>Three Act Structure for the Story: ${storyIdea}.</p>`;
});

// Handle Scene and Dialogue Generation Form
document.getElementById('scene-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const character = document.getElementById('character').value;
    const scenario = document.getElementById('scenario').value;
    const emotion = document.getElementById('emotion').value;

    const sceneOutput = document.getElementById('scene-output');
    sceneOutput.innerHTML = `<p>Generated Scene: ${character} is in a ${scenario}, feeling ${emotion}. More details coming soon!</p>`;
});
