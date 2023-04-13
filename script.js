const btn = document.getElementById('say');

const parser = new DOMParser();

btn.addEventListener('click', async () => {
    const len = document.querySelector('input[name=len]').value;
    const lat = document.querySelector('input[name=lat]').value;

    const res = await fetch(`/hello?len=${len}&lat=${lat}`);
    const body = await res.json();

    console.log(res);

    const el = parser.parseFromString(`
        <dl>
            <dt>Temperature</dt>
            <dd>${body.main.temp}</dd>
            <dt>Weather</dt>
            <dd>${body.weather[0].description}</dd>
            <dt>Location</dt>
            <dd>${body.name}</dd>
        </dl>
    `, "text/html").body.firstChild;

    btn.after(el);
});