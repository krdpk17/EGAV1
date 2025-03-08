document.addEventListener('DOMContentLoaded', function() {
  const apiKeySection = document.getElementById('apiKeySection');
  const apiKeyInput = document.getElementById('apiKey');
  const saveApiKeyButton = document.getElementById('saveApiKey');
  const videoResults = document.getElementById('videoResults');
  const loading = document.getElementById('loading');
  const recentTab = document.getElementById('recentTab');
  const popularTab = document.getElementById('popularTab');

  let currentTab = 'recent';

  // Check for stored API key
  chrome.storage.local.get(['youtubeApiKey'], function(result) {
    if (result.youtubeApiKey) {
      apiKeySection.style.display = 'none';
      fetchVideos();
    }
  });

  // Save API Key
  saveApiKeyButton.addEventListener('click', function() {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
      chrome.storage.local.set({ youtubeApiKey: apiKey }, function() {
        apiKeySection.style.display = 'none';
        fetchVideos();
      });
    }
  });

  // Tab switching
  recentTab.addEventListener('click', function() {
    currentTab = 'recent';
    recentTab.classList.add('active');
    popularTab.classList.remove('active');
    fetchVideos();
  });

  popularTab.addEventListener('click', function() {
    currentTab = 'popular';
    popularTab.classList.add('active');
    recentTab.classList.remove('active');
    fetchVideos();
  });

  function fetchVideos() {
    chrome.storage.local.get(['youtubeApiKey'], function(result) {
      if (!result.youtubeApiKey) return;

      loading.style.display = 'block';
      videoResults.innerHTML = '';

      const searchQuery = 'artificial intelligence progress technology';
      const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
      const order = currentTab === 'recent' ? 'date' : 'viewCount';
      
      const url = `${baseUrl}?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=10&order=${order}&type=video&key=${result.youtubeApiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          loading.style.display = 'none';
          displayVideos(data.items);
        })
        .catch(error => {
          loading.style.display = 'none';
          videoResults.innerHTML = '<p class="error">Error loading videos. Please check your API key.</p>';
        });
    });
  }

  function displayVideos(videos) {
    videoResults.innerHTML = '';
    
    videos.forEach(video => {
      const videoCard = document.createElement('a');
      videoCard.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
      videoCard.target = '_blank';
      videoCard.className = 'video-card';
      
      videoCard.innerHTML = `
        <img class="video-thumbnail" src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
        <div class="video-info">
          <div class="video-title">${video.snippet.title}</div>
          <div class="video-channel">${video.snippet.channelTitle}</div>
          <div class="video-stats">${new Date(video.snippet.publishedAt).toLocaleDateString()}</div>
        </div>
      `;
      
      videoResults.appendChild(videoCard);
    });
  }
}); 