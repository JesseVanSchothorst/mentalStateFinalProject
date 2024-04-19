/*
* Author: Jesse Van Schothorst
* File: cats.js
* Breif: this will display the gallery of cat images from the web
*/

import React from 'react';
import Gallery from 'react-native-awesome-gallery';
export function GalleryView() {
    const images = [
        'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_640.jpg',
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
        'https://cdn.pixabay.com/photo/2023/08/12/13/59/cat-8185712_640.jpg',
        'https://cdn.pixabay.com/photo/2022/06/18/16/55/cute-7270285_640.png',
        'https://cdn.pixabay.com/photo/2021/10/21/14/03/cats-6729197_640.jpg',
        'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930_640.jpg',
        'https://cdn.pixabay.com/photo/2016/06/24/15/48/pattern-1477380_640.png',
        'https://cdn.pixabay.com/photo/2021/03/31/03/12/cat-6138366_640.jpg',
        'https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671_640.jpg',
        'https://cdn.pixabay.com/photo/2022/12/05/05/20/cat-7635983_640.png',
        'https://cdn.pixabay.com/photo/2018/05/09/19/31/cat-3385968_960_720.png',
        'https://cdn.pixabay.com/photo/2018/01/02/14/45/cat-3056343_960_720.png',

    ];

    return (

        <Gallery

            data={images}
        />
    );
}

