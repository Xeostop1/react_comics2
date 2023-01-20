import React from "react";

const baseUrl = 'https://api.mangadex.org';
const API_KEY = 'bbdaa3a3-ea49-4f12-9e1c-baa452f0830d';
// const status = 'reading';

const requests={
    url: `${baseUrl}/manga/${API_KEY}/status`,
}
export default requests;