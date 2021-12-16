import mclarenThumb from '../../assets/galleryImages/automotive/thumbnails/Mclaren-765lt-Shift-S3ctor-Thumb.jpg';
import lamborghiniThumb from '../../assets/galleryImages/automotive/thumbnails/Lamborghini-Aventador-Shift-S3ctor-Thumb.jpg';
import viperThumb from '../../assets/galleryImages/automotive/thumbnails/Ned-Dunphy-Vengence-Racing-Dodge-Viper-Shift-S3ctor-Thumb.jpg';
import tacoma1Thumb from '../../assets/galleryImages/automotive/thumbnails/Toyota-Tacoma-Stars-Thumb.jpg';
import tacoma2Thumb from '../../assets/galleryImages/automotive/thumbnails/Toyota-Tacoma-Trees-Thumb.jpg';
import palatovThumb from '../../assets/galleryImages/automotive/thumbnails/Greg-Tracy-Palatov-EV-Pikes-Peak-Thumb.jpg';
import camaroThumb from '../../assets/galleryImages/automotive/thumbnails/Chevrolet-Camaro-Burnout-Shift-S3ctor-Thumb.jpg';
import robinShuteThumb from '../../assets/galleryImages/automotive/thumbnails/Robin-Shute-Pikes-Peak-Thumb.jpg';
import englishRacingRigThumb from '../../assets/galleryImages/automotive/thumbnails/English-Racing-Transport-Shift-S3ctor-Thumb.jpg';
import englishRacingPPAAThumb from '../../assets/galleryImages/automotive/thumbnails/English-Racing-F7F-Shift-S3ctor-Panorama-Thumb.jpg';
import fordGtThumb from '../../assets/galleryImages/automotive/thumbnails/Ford-GT-F7F-Shift-S3ctor-Pikes-Peak-Thumb.jpg';
import R8Front from '../../assets/galleryImages/automotive/thumbnails/Audi-R8-Front-Thumb.jpg';
import R8Side from '../../assets/galleryImages/automotive/thumbnails/Audi-R8-Studio-Thumb.jpg';

// import camaro from '../../assets/galleryImages/automotive/thumbnails/';

function importAll(r) {
	let images = [];
	r.keys().forEach((item, i) => {
		images[i] = { thumbSrc: r(item).default };
	});
	return images;
}

const travelImages = importAll(
	require.context('../../assets/galleryImages/travel/thumbnails', false, /\.(png|jpe?g|svg)$/)
);

const autoImages = [
	{
		thumbSrc: mclarenThumb,
		alt: 'Arobahn Mclaren 765lt at Shift-S3ctor California Airstrip Attack',
	},
	{
		thumbSrc: lamborghiniThumb,
		alt: 'Lamborghini Aventador at Shift-S3ctor Indiana',
	},
	{
		thumbSrc: tacoma1Thumb,
		alt: 'Toyota Tacoma and Gazelle Tent camping under the stars in Death Valley',
	},
	{
		thumbSrc: viperThumb,
		alt: 'Ned Dunphy Vengence Racing Dodge Viper at Shift-S3ctor Indiana',
	},
	{
		thumbSrc: englishRacingRigThumb,
		alt: 'Chevrolet Camaro doing a burnout at Shift-S3ctor California',
	},
	{
		thumbSrc: tacoma2Thumb,
		alt: 'Toyota Tacoma in the San Bernadino National Forest California',
	},
	{
		thumbSrc: camaroThumb,
		alt: 'Chevrolet Camaro doing a burnout at Shift-S3ctor California',
	},
	{
		thumbSrc: palatovThumb,
		alt: 'Greg Tracy driving the Palatov D2 EV at Pike Peak International Hill Climb',
	},
	{
		thumbSrc: robinShuteThumb,
		alt: 'Robin Shute in drivers parade at Pike Peak International Hill Climb',
	},
	{
		thumbSrc: R8Front,
		alt: 'Audi R8 front end view',
	},
	{
		thumbSrc: R8Side,
		alt: 'Audi R8 three quarter front view',
	},
	{
		thumbSrc: fordGtThumb,
		alt: 'Fort GT and F7F Bearcat at Revvolution Shift-S3ctor Pikes Peak Airstrip Attack',
	},
	{
		thumbSrc: englishRacingPPAAThumb,
		alt: 'Acura Integra, Lamborghini Gallardo, Nissan GTR, Mitsubishi Lancer Evolution, and F7F Bearcat at Revvolution Shift-S3ctor Pikes Peak Airstrip Attack',
	},
];

export const TravelImages = travelImages;

export const AutomotiveImages = autoImages;
