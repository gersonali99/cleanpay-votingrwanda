// Get HTML elements
const yesVoteBtn = document.getElementById('yesVote');
const noVoteBtn = document.getElementById('noVote');
const yesCount = document.getElementById('yesCount');
const noCount = document.getElementById('noCount');
const commentSection = document.getElementById('commentSection');
const noComment = document.getElementById('noComment');
const submitCommentBtn = document.getElementById('submitComment');

// Retrieve votes from localStorage (persist votes)
let yesVotes = localStorage.getItem('yesVotes') ? parseInt(localStorage.getItem('yesVotes')) : 0;
let noVotes = localStorage.getItem('noVotes') ? parseInt(localStorage.getItem('noVotes')) : 0;

yesCount.textContent = yesVotes;
noCount.textContent = noVotes;

// Voting logic
yesVoteBtn.addEventListener('click', () => {
    yesVotes++;
    yesCount.textContent = yesVotes;
    localStorage.setItem('yesVotes', yesVotes);
});

noVoteBtn.addEventListener('click', () => {
    commentSection.classList.remove('hidden'); // Show comment section
});

// Submit comment
submitCommentBtn.addEventListener('click', () => {
    const comment = noComment.value.trim();
    if (comment) {
        noVotes++;
        noCount.textContent = noVotes;
        localStorage.setItem('noVotes', noVotes);
        commentSection.classList.add('hidden'); // Hide comment section
    } else {
        alert('Please provide a comment.');
    }
});
