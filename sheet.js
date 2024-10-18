const abilityScores = [...document.getElementsByClassName('ability-score')]

const scores_to_modifiers = {
    8: "-1",
    9: "-1",
    10: "+0",
    11: "+0",
    12: "+1"
}

abilityScores.forEach(x=> {
    x.addEventListener('change', evt => {
        evt.target.parentElement.querySelector('output').value = scores_to_modifiers[evt.target.value]
    })
})