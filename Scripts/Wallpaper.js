function setWallpaper(Path) {
    document.body.style.backgroundImage = `url('${Path}')`;
    localStorage.setItem('SelectedWallpaper', Path);
}

window.addEventListener('DOMContentLoaded', () => {
    const Saved = localStorage.getItem('SelectedWallpaper');
    if (Saved) {
        document.body.style.backgroundImage = `url('${Saved}')`;
    } else {
        setWallpaper('Wallpapers/Default.png');
    }     
});

function setCustomWallpaper(event) {
    const File = event.target.files[0];
    if (!File) return;
    const Reader = new FileReader();
    Reader.onload = function(e) {
        document.body.style.backgroundImage = `url('${e.target.result}')`;
        localStorage.setItem('SelectedWallpaper', e.target.result);
    };
    Reader.readAsDataURL(File);
}

function triggerUpload() {
    document.getElementById('upload-image').click();
}