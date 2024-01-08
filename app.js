
// Change Navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 70);
    document.querySelector('#logo-name').classList.toggle('display-items', window.scrollY > 70);
    document.querySelector('#logo-img').classList.toggle('display-items', window.scrollY > 70);
})



const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons)

async function copyText(e) {
    // Prevent button from going to the site but instead copy to the clipboard
    e.preventDefault();
    const link = this.getAttribute('link');
    console.log(link);

    try {
        await navigator.clipboard.writeText(link);
        alert("Link successfully copied: \n" + link);
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));