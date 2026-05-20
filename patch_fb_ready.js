const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. pushLeaderboardEntry was not async -> already fixed in last diff!
// Oh wait, removeLeaderboardEntry is NOT using fbReady properly? It has `await fbReady()`. Oh wait, the user's report is giving us a list of "six separate issues, all fixed". We need to make sure ALL of these are fixed in index.html!
