import React from 'react';
import '../../css/imageGallery/imageGallery.scss';
import { AutomotiveImages, TravelImages } from './images';

const ImageGallery = () => {

	const mapImgs = (colNum, type) => {
		let iterator = 0;
		let returnArr = [];
		let currentPhotos = []
		if(type === 'automotive'){
			currentPhotos = AutomotiveImages
		}
		else if(type === 'travel'){
			currentPhotos = TravelImages
		}

		currentPhotos.forEach((img, i) => {
			if (i === colNum || iterator === colNum) {
				returnArr.push(<img src={img.thumbSrc} alt={i} className='galleryImage' key={i} effect='blur' />);
			}
			if (iterator === 2) {
				iterator = 0;
			} else {
				iterator++;
			}
		});

		return returnArr.map((el) => {
			return el;
		});
	};

	return (
		<div id='ImageGallery'>
			<h4>Automotive</h4>
			<div className='box'>
				<div className='col'>{mapImgs(0, 'automotive')}</div>
				<div className='col'>{mapImgs(1, 'automotive')}</div>
				<div className='col'>{mapImgs(2, 'automotive')}</div>
			</div>

			<h4>Travel</h4>
			<div className='box'>
				<div className='col'>{mapImgs(0, 'travel')}</div>
				<div className='col'>{mapImgs(1, 'travel')}</div>
				<div className='col'>{mapImgs(2, 'travel')}</div>
			</div>
		</div>
	);
};

export default ImageGallery;
