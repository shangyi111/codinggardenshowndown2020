import getImages from './api.js';

const form = document.querySelector('form');
const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('.images');
loadingImage.style.display = 'none';

form.addEventListener('submit',(event)=>{
	form.preventDefault();
	
	const formData = new FormData(form);
	const searchTerm = formData.get('searchTerm');
	loadingImage.style.display = '';
	const images = await getImages(searchTerm);
	addImagesToPage(images);
})

function addImagesToPage(imges){
	imageSection.innerHTML = '';
	images.forEach((item)=>{
		const imageElement = document.createElement('img');
		imageElement.src = item.image;
		imageSection.append(imageElement);
	})
}


