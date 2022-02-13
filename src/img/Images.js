function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item).default; });
    return images;
}
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg|JPG)$/));

export default images;