const games = [
    {
        "id": "retro-bowl",
        "title": "Retro Bowl",
        "thumbnail": "https://picsum.photos/seed/retrobowl/400/300",
        "url": "https://freegamesunblocked76.github.io/retro-bowl/",
        "category": "Sports"
    },
    {
        "id": "kour-io",
        "title": "Kour.io",
        "thumbnail": "https://picsum.photos/seed/kourio/400/300",
        "url": "https://kour.io/?msn=true&msstart_sdk_init=eyJwYXJlbnRPcmlnaW4iOiJodHRwczovL3d3dy5tc24uY29tIiwiY2xpZW50SWQiOiIwNkI4ODAyMjA5N0Y2NEM1MkVCQjkzODAwOERFNjU1MSIsImxvY2FsZSI6ImVzLWFyIiwiZW50cnlQb2ludElkIjoiIiwic3dpdGNoR2FtZVBheWxvYWQiOnsic3dpdGNoZWRUbyI6IjluMG53ZjRoYmI3tCIsInZhbHVlIjp7fX19",
        "category": "FPS"
    },
    {
        "id": "basket-random",
        "title": "Basket Random",
        "thumbnail": "https://picsum.photos/seed/basketrandom/400/300",
        "url": "https://basketrandom.pro/game/basket-random/?key=y8&value=default",
        "category": "Sports"
    },
    {
        "id": "drift-boss",
        "title": "Drift Boss",
        "thumbnail": "https://picsum.photos/seed/driftboss/400/300",
        "url": "https://storage.y8.com/y8-studio/html5/common/drift_boss_v3/?key=8465263&value=238115",
        "category": "Racing"
    },
    {
        "id": "bitlife",
        "title": "BitLife",
        "thumbnail": "https://picsum.photos/seed/bitlife/400/300",
        "url": "https://1727859.github.io/cyanidegames/bitlife/index.html",
        "category": "Simulation"
    },
    {
        "id": "moto-x3m",
        "title": "Moto X3M",
        "thumbnail": "https://picsum.photos/seed/motox3m/400/300",
        "url": "https://storage.y8.com/y8-studio/html5/madpuffers/MotoX3M_3_new/?key=2365427&value=121653",
        "category": "Racing"
    },
    {
        "id": "soccer-random",
        "title": "Soccer Random",
        "thumbnail": "https://picsum.photos/seed/soccerrandom/400/300",
        "url": "https://html5.gamedistribution.com/rvvASMiM/308d826f20034d7b972f25258c8d0a44/index.html?gd_sdk_referrer_url=https%3A%2F%2Fes.y8.com%2Fgames%2Fsoccer_random&key=y8&value=default&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2VzLnk4LmNvbS9nYW1lcy9zb2NjZXJfcmFuZG9tIiwicGFyZW50RG9tYWluIjoiZXMueTguY29tIiwidG9wRG9tYWluIjoiZXMueTguY29tIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D",
        "category": "Sports"
    },
    {
        "id": "superfighters",
        "title": "Superfighters",
        "thumbnail": "https://picsum.photos/seed/superfighters/400/300",
        "url": "https://html5.gamedistribution.com/rvvASMiM/a7a878d376bf4223adc51d2ba04fb77c/index.html?gd_sdk_referrer_url=https%3A%2F%2Fes.y8.com%2Fgames%2Fsuperfighters&key=y8&value=default&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2VzLnk4LmNvbS9nYW1lcy9zdXBlcmZpZ2h0ZXJzIiwicGFyZW50RG9tYWluIjoiZXMueTguY29tIiwidG9wRG9tYWluIjoiZXMueTguY29tIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D",
        "category": "Action"
    },
    {
        "id": "death-run",
        "title": "Death Run",
        "thumbnail": "https://picsum.photos/seed/deathrun/400/300",
        "url": "https://storage.y8.com/y8-studio/unity_webgl/bitlaslt/death_run_wasm_v1/?key=y8&ratio_tolerant=true&value=default",
        "category": "Action"
    },
    {
        "id": "rally-point-2",
        "title": "Rally Point 2",
        "thumbnail": "https://picsum.photos/seed/rallypoint2/400/300",
        "url": "https://html5.gamedistribution.com/rvvASMiM/7b4823bb11e04e2391c07fc53c5c4924/index.html?gd_sdk_referrer_url=https%3A%2F%2Fes.y8.com%2Fgames%2Frally_point_2_&key=y8&value=default&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2VzLnk4LmNvbS9nYW1lcy9yYWxseV9wb2ludF8yXyIsInBhcmVudERvbWFpbiI6ImVzLnk4LmNvbSIsInRvcERvbWFpbiI6ImVzLnk4LmNvbSIsImhhc0ltcHJlc3Npb24iOmZhbHNlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE4In0%3D",
        "category": "Racing"
    },
    {
        "id": "fnaf-epstein-3",
        "title": "Five Nights at Epstein's 3",
        "thumbnail": "https://picsum.photos/seed/fnafep3/400/300",
        "url": "https://www.archive.play-games.com/games/FNAF/five-nights-at-epsteins/3/index.html",
        "category": "Horror"
    },
    {
        "id": "smash-karts-unblocked",
        "title": "Smash Karts",
        "thumbnail": "https://picsum.photos/seed/smashkarts/400/300",
        "url": "https://unblocked-games.org/game/smash-karts.embed",
        "category": "Racing"
    },
    {
        "id": "snake-io",
        "title": "Snake.io",
        "thumbnail": "https://picsum.photos/seed/snakeio/400/300",
        "url": "https://unblocked-games.org/games/snake-io",
        "category": "IO"
    },
    {
        "id": "moto-x3m-pool-party",
        "title": "Moto X3M Pool Party",
        "thumbnail": "https://picsum.photos/seed/motox3mpool/400/300",
        "url": "https://html5.gamedistribution.com/f804d079d19f44d3b951ead4588e974a/?gd_sdk_referrer_url=https://unblocked-games.org/moto-x3m-pool-party/",
        "category": "Racing"
    },
    {
        "id": "granny",
        "title": "Granny",
        "thumbnail": "https://picsum.photos/seed/granny/400/300",
        "url": "https://db.duckmath.org/html/granny/index.html",
        "category": "Horror"
    },
    {
        "id": "pokemon-red",
        "title": "Pokémon Red",
        "thumbnail": "https://picsum.photos/seed/pokemonred/400/300",
        "url": "https://maddox05.github.io/gba_emu/launcher.html#pokemonred",
        "category": "Adventure"
    },
    {
        "id": "baldis-basics",
        "title": "Baldi's Basics",
        "thumbnail": "https://picsum.photos/seed/baldi/400/300",
        "url": "https://db2.duckmath.org/2026/more/baldis-basics/pre.html",
        "category": "Horror"
    },
    {
        "id": "1v1-lol",
        "title": "1v1.LOL",
        "thumbnail": "https://picsum.photos/seed/1v1lol/400/300",
        "url": "https://db.duckmath.org/html/1v1lol/index.html",
        "category": "Action"
    },
    {
        "id": "race-survival",
        "title": "Race Survival: Arena King",
        "thumbnail": "https://picsum.photos/seed/racesurvival/400/300",
        "url": "https://db.duckmath.org/html/race_survival_arena_king/index.html",
        "category": "Racing"
    },
    {
        "id": "minecraft-classic",
        "title": "Minecraft",
        "thumbnail": "https://picsum.photos/seed/minecraft/400/300",
        "url": "https://db.duckmath.org/html/minecraft/index.html",
        "category": "Adventure"
    },
    {
        "id": "super-mario-64",
        "title": "Super Mario 64",
        "thumbnail": "https://picsum.photos/seed/sm64/400/300",
        "url": "https://db.duckmath.org/html/super_mario_64/index.html",
        "category": "Adventure"
    },
    {
        "id": "pokemon-unbound",
        "title": "Pokémon Unbound",
        "thumbnail": "https://picsum.photos/seed/pokemonunbound/400/300",
        "url": "https://unbound2.com/emu/index.html",
        "category": "Adventure"
    },
    {
        "id": "pokemon-too-many-types",
        "title": "Pokémon: Too Many Types",
        "thumbnail": "https://picsum.photos/seed/pokemontmtypes/400/300",
        "url": "https://www.play-games.com/iframe/39233.html",
        "category": "Adventure"
    },
    {
        "id": "pokemon-fire-red-randomizer",
        "title": "Pokémon Fire Red Randomizer",
        "thumbnail": "https://picsum.photos/seed/fireredrand/400/300",
        "url": "https://www.play-games.com/iframe/39238.html",
        "category": "Adventure"
    },
    {
        "id": "pokemon-firered-rocket-edition",
        "title": "Pokémon FireRed: Rocket Edition",
        "thumbnail": "https://www.webmulator.com/img/roms/thumbs/pokemon-firered-rocket-edition-thumb.jpg",
        "url": "https://downloads.webmulator.com/play.php?emulator=1&console_slug=gameboy-advance&rom_url=%2Froms%2FPokemon+FireRed+Rocket+Edition.zip&thumb_url=https://www.webmulator.com/img/roms/thumbs/pokemon-firered-rocket-edition-thumb.jpg&rom_slug=pokemon-firered-rocket-edition",
        "category": "Adventure"
    },
    {
        "id": "pokemon-fusion-3",
        "title": "Pokémon Fusion 3",
        "thumbnail": "https://www.webmulator.com/img/roms/thumbs/pokemon-fusion-3-gba-thumb.jpg",
        "url": "https://downloads.webmulator.com/play.php?emulator=1&console_slug=gameboy-advance&rom_url=%2Froms%2FFusion%25203%2520-%2520Red%2526Blue.zip&thumb_url=https://www.webmulator.com/img/roms/thumbs/pokemon-fusion-3-gba-thumb.jpg&rom_slug=pokemon-fusion-3",
        "category": "Adventure"
    }
];

let currentSearch = '';
let currentCategory = 'All';

function safeCreateIcons() {
    try {
        if (typeof window !== 'undefined' && window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    } catch (e) {
        console.warn('Lucide icon render notice:', e);
    }
}

function init() {
    renderCategories();
    renderGames();
    safeCreateIcons();
}

function renderCategories() {
    const categories = ['All', ...new Set(games.map(g => g.category))];
    
    // Sidebar container (desktop)
    const container = document.getElementById('category-list');
    if (container) {
        container.innerHTML = categories.map(cat => `
            <button 
                onclick="setCategory('${cat}')"
                class="text-left px-4 py-2 rounded-xl transition-all ${currentCategory === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}"
            >${cat}</button>
        `).join('');
    }

    // Mobile horizontal container
    const mobileContainer = document.getElementById('mobile-category-list');
    if (mobileContainer) {
        mobileContainer.innerHTML = categories.map(cat => `
            <button 
                onclick="setCategory('${cat}')"
                class="whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${currentCategory === cat ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'}"
            >${cat}</button>
        `).join('');
    }
}

function setCategory(cat) {
    currentCategory = cat;
    renderCategories();
    renderGames();
    // Show/hide hero base on category
    const hero = document.getElementById('hero-section');
    if (hero) hero.classList.toggle('hidden', cat !== 'All' || currentSearch !== '');
}

function handleSearch(val) {
    currentSearch = val;
    renderGames();
    const hero = document.getElementById('hero-section');
    if (hero) hero.classList.toggle('hidden', val !== '' || currentCategory !== 'All');
}

function renderGames() {
    const grid = document.getElementById('game-grid');
    if (!grid) return;

    const hero = document.getElementById('hero-section');
    if (hero) {
        if (games.length === 0) {
            hero.classList.add('hidden');
        } else {
            hero.classList.toggle('hidden', currentCategory !== 'All' || currentSearch !== '');
        }
    }

    const filtered = games.filter(g => {
        const matchesSearch = g.title.toLowerCase().includes(currentSearch.toLowerCase());
        const matchesCat = currentCategory === 'All' || g.category === currentCategory;
        return matchesSearch && matchesCat;
    });

    const countEl = document.getElementById('game-count');
    if (countEl) countEl.innerText = `${filtered.length} AVAILABLE_SLOTS`;

    const noResultsEl = document.getElementById('no-results');
    if (noResultsEl) noResultsEl.classList.toggle('hidden', filtered.length > 0);

    const catLabelEl = document.getElementById('current-category-label');
    if (catLabelEl) {
        catLabelEl.innerHTML = `<span class="w-8 h-[2px] bg-indigo-500/30"></span> ${currentCategory === 'All' ? 'System Directory' : currentCategory + ' Module'}`;
    }

    grid.innerHTML = filtered.map((game) => `
        <div 
            class="group flex flex-col gap-3 cursor-pointer select-none"
            onclick="openGame('${game.id}')"
        >
            <div class="aspect-video bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800 transition-all duration-300 group-hover:border-indigo-500/60 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] relative">
                <img 
                    src="${game.thumbnail}" 
                    alt="${game.title}"
                    class="w-full h-full object-cover grayscale-[0.15] transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=80';"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                     <div class="w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                        <i data-lucide="play" class="w-5 h-5 fill-current ml-0.5"></i>
                     </div>
                </div>
            </div>
            <div class="px-1">
                <h4 class="font-black text-sm md:text-base tracking-tight group-hover:text-indigo-400 transition-colors uppercase italic truncate">${game.title}</h4>
                <div class="flex items-center gap-2 mt-1">
                    <span class="text-[10px] text-slate-400 uppercase tracking-widest font-bold">${game.category}</span>
                    <span class="w-1 h-1 bg-slate-700 rounded-full"></span>
                    <span class="text-[10px] text-emerald-400 font-mono tracking-tighter flex items-center gap-1">
                        <span class="w-1 h-1 bg-emerald-400 rounded-full"></span> ONLINE
                    </span>
                </div>
            </div>
        </div>
    `).join('');
    
    safeCreateIcons();
}

let activeGameId = null;

function openGame(id) {
    const game = games.find(g => g.id === id);
    if(!game) return;

    activeGameId = id;

    const galleryEl = document.getElementById('gallery-view');
    const sidebarEl = document.getElementById('sidebar');
    const searchEl = document.getElementById('search-container');
    const playerEl = document.getElementById('player-view');
    
    if (galleryEl) galleryEl.classList.add('hidden');
    if (sidebarEl) sidebarEl.classList.add('hidden');
    if (searchEl) searchEl.classList.add('hidden');
    
    if (playerEl) playerEl.classList.remove('hidden');
    
    const titleEl = document.getElementById('player-game-title');
    if (titleEl) titleEl.innerText = game.title;
    
    const catEl = document.getElementById('player-game-category');
    if (catEl) catEl.innerText = game.category;
    
    // Set external link
    const externalBtn = document.getElementById('external-link');
    if (externalBtn) {
        externalBtn.onclick = () => window.open(game.url, '_blank');
    }

    loadGameIframe(game.url);
    safeCreateIcons();
    
    window.scrollTo(0,0);
}

function loadGameIframe(url) {
    const container = document.getElementById('iframe-container');
    if (!container) return;
    
    container.innerHTML = `
        <iframe 
            src="${url}" 
            class="w-full h-full border-none" 
            allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope; display-capture"
            allowfullscreen
        ></iframe>
    `;
}

function reloadGame() {
    if (!activeGameId) return;
    const game = games.find(g => g.id === activeGameId);
    if (game) {
        loadGameIframe(game.url);
    }
}

function showGallery() {
    activeGameId = null;
    const playerEl = document.getElementById('player-view');
    const iframeEl = document.getElementById('iframe-container');
    const galleryEl = document.getElementById('gallery-view');
    const sidebarEl = document.getElementById('sidebar');
    const searchEl = document.getElementById('search-container');

    if (playerEl) playerEl.classList.add('hidden');
    if (iframeEl) iframeEl.innerHTML = ''; // Stop game audio
    
    if (galleryEl) galleryEl.classList.remove('hidden');
    if (sidebarEl) sidebarEl.classList.remove('hidden');
    if (searchEl) searchEl.classList.remove('hidden');
    safeCreateIcons();
}

function launchFeatured() {
    if (games.length > 0) {
        openGame(games[0].id);
    }
}

function resetFilters() {
    currentSearch = '';
    currentCategory = 'All';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    setCategory('All');
}

function toggleFullscreen() {
    const container = document.getElementById('iframe-container');
    if (!container) return;
    if (container.requestFullscreen) {
        container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
    }
}

// Expose all functions to global window for HTML inline onclick/oninput compatibility in production builds
if (typeof window !== 'undefined') {
    window.games = games;
    window.init = init;
    window.renderCategories = renderCategories;
    window.setCategory = setCategory;
    window.handleSearch = handleSearch;
    window.renderGames = renderGames;
    window.openGame = openGame;
    window.loadGameIframe = loadGameIframe;
    window.reloadGame = reloadGame;
    window.showGallery = showGallery;
    window.launchFeatured = launchFeatured;
    window.resetFilters = resetFilters;
    window.toggleFullscreen = toggleFullscreen;
    window.safeCreateIcons = safeCreateIcons;
}

// Reliable init on multiple lifecycle events
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
window.addEventListener('load', () => {
    safeCreateIcons();
});
