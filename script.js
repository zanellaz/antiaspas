comAspas.addEventListener('keyup', ({ currentTarget }) => 
    semAspas.value = currentTarget.value.replace(/[‘’]+/g, "'"))