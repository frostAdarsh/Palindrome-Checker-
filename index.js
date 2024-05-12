const input = document.getElementById('input')


function reverseString(str){
    return str.split('').reverse().join('')
}
function check(){
    const value = input.value
    const rev =  reverseString(value)
    

    if (value === rev){
        alert('PALINDROME')
    }else{
        alert('Not a PALINDROME')
    }

    input.value = ''
}

