import { derived, readable, writable } from 'svelte/store';

type Image = {
    image: string,
    caption : string
};

const IMAGES: Image[] = [
    {image: 'dave-hoefler-okUIdo6NxGo-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'jakob-owens-EwRM05V0VSI-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'kellen-riggin-SIBOiXKg0Ds-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'sherman-yang-VBBGigIuaDY-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'silas-baisch-Wn4ulyzVoD4-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'sonya-romanovska-wzdXhyi3AiM-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
    {image: 'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg', caption: 'Photo by Dave Hoefler Unsplash' },
];

export const imagesList = readable(IMAGES);

export function SelectedImageIndexStore() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
        set,
		next: () => update(n => n < IMAGES.length - 1 ? n + 1 : 0),
		prev: () => update(n => n > 0 ? n - 1 : IMAGES.length - 1),
	};

}

export const selectedImageIndex = SelectedImageIndexStore();

export const selectedImage = derived(
    selectedImageIndex,
    $index => IMAGES[$index]
)