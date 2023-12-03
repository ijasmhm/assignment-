function bold(){
    document.execCommand('bold',true,null)
}

function underline(){
    document.execCommand('underline',true,null)
}

function italic(){
    document.execCommand('italic',true,null)
}

function left() {
    document.querySelectorAll('.left').forEach(function(element){
        element.addEventListener('click',function(){
            document.getElementById('editor').style.textAlign = 'left'
        })
    })
    
}

function right() {
    document.querySelectorAll('.right').forEach(function(element){
        element.addEventListener('click',function(){
            document.getElementById('editor').style.textAlign = 'right'
        })
    })
    
}

function justify() {
    document.querySelectorAll('.justify').forEach(function(element){
        element.addEventListener('click',function(){
            document.getElementById('editor').style.textAlign = 'justify'
        })
    })
    
}

function center() {
    document.querySelectorAll('.center').forEach(function(element){
        element.addEventListener('click',function(){
            document.getElementById('editor').style.textAlign = 'center'
        })
    })
    
}

/*function fontColor() {
    document.querySelectorAll('.font-color').forEach(function(element){
        element.addEventListener('click',function(){
            console.log("font-color")
            var selection = window.getSelection()
            var highlightedText = selection.toString()
            var span = "<span style='color: red'>" + highlightedText+"</span>"
            var text = document.getElementById('editor').innerHTML
            document.getElementById('editor').innerHTML=text.replace(highlightedText, span)
        })
    })

}*/


function changeTextColor(color) {
    document.execCommand('foreColor', false, color);
}










function executeCommand(command) {
    document.execCommand(command, false, null);
  }

  function undo() {
    document.execCommand('undo', false, null);
  }

  function redo() {
    document.execCommand('redo', false, null);
  }