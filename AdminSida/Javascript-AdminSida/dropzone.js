/**
 * Created by Jannike on 2016-05-07.
 */
var dropZone = document.getElementById('dropZone');

// Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
dropZone.addEventListener('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

// Get file data on drop
dropZone.addEventListener('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files; // Array of all files
    for (var i = 0, file; file = files[i]; i++) {
        if (file.type.match(/image.*/)) {
            var reader = new FileReader();
            reader.onload = function (e2) { // finished reading file data.
                var img = document.createElement('img');
                //img.addClass('imgClass');
                img.src = e2.target.result;
                var dropzone = document.getElementById('dropZone');
                dropzone.appendChild(img);
                var imgData = document.getElementById('imgData'); // data för bilden i textsträng
                imgData.value = e2.target.result;
                //alert(img.height);
                img.height=100;
                img.width=100;
            }
            reader.readAsDataURL(file); // start reading the file data.
        }
    }
});
