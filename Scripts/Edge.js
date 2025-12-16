function goBack() {
    const webview = document.getElementById('webview');
    webview.contentWindow.history.back();
}

function goForward() {
    const webview = document.getElementById('webview');
    if (webview) {
        webview.contentWindow.history.forward();
    }
}

function Wait4thisMoment() {
    const webview = document.getElementById('webview');
    if (webview) {
        webview.contentWindow.location.reload(); 
    }
}
function loadPage() {
    const urlBar = document.getElementById("url-bar");
    const webview = document.getElementById("webview");
    const favicon = document.getElementById("favicon");

    if (!urlBar || !webview) {
        console.warn("URL bar or Webview element not found.");
        return;
    }

    let url = urlBar.value.trim();
    
    try {
        const parsedUrl = new URL(url);
        if (!["http:", "https:", "ftp:", "file:"].includes(parsedUrl.protocol)) {
            throw new Error("Invalid protocol");
        }
    } catch (e) {
        console.error("Error parsing URL:", e);
        url = `https://www.bing.com/search?q=${encodeURIComponent(url)}`;
    }

    webview.src = url;

    let domain = new URL(url).origin;
    let faviconUrl = `${domain}/favicon.ico`;

    favicon.src = faviconUrl;
    favicon.style.display = "inline";
}

document.getElementById('back-button')?.addEventListener('click', goBack);
document.getElementById('forward-button')?.addEventListener('click', goForward);
document.getElementById('load-button')?.addEventListener('click', loadPage);

function showBrowser() {
    const browser = document.getElementById('browser');
    if (browser) {
        browser.style.display = 'block';
        browser.style.left = '50px';
        browser.style.top = '100px';
    } else {
        alert('Browser element not found. Ensure the element with ID "browser" exists.');
    }
}

function closeBrowser() {
    const browser = document.getElementById('browser');
    if (browser) {
        browser.style.display = 'none';
    }
}

function makeHeaderDraggable(header, popup) {
    if (!header || !popup) return;

    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', function(e) {
        if (e.button !== 0) return;
        isDragging = true;
        offsetX = e.clientX - popup.getBoundingClientRect().left;
        offsetY = e.clientY - popup.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (!isDragging) return;
        popup.style.left = `${e.clientX - offsetX}px`;
        popup.style.top = `${e.clientY - offsetY}px`;
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}

makeHeaderDraggable(document.getElementById('browser'));
document.querySelectorAll('.popup').forEach(popup => {
    const header = popup.querySelector('header');
    if (header) makeHeaderDraggable(header, popup);
});