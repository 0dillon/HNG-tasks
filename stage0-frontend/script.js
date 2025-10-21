(function(){
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  const avatarImg = document.getElementById('avatar');
  const avatarUrlInput = document.getElementById('avatar-url');
  const applyBtn = document.getElementById('apply-avatar');
  const uploadInput = document.getElementById('avatar-file');
  const uploadBtn = document.getElementById('apply-upload');
  const refreshBtn = document.getElementById('refresh-time');

  function renderTime(){
    const ms = Date.now();
    timeEl.textContent = String(ms);
    timeEl.setAttribute('data-timestamp', ms);
  }
  renderTime();

  refreshBtn.addEventListener('click', function(){
    renderTime();
    refreshBtn.focus();
  });

  applyBtn.addEventListener('click', function(){
    const url = (avatarUrlInput.value || '').trim();
    if(!url) return;
    avatarImg.src = url;
    avatarImg.alt = `Avatar for ${document.querySelector('[data-testid="test-user-name"]').textContent}`;
    avatarUrlInput.value = '';
    applyBtn.blur();
  });

  uploadBtn.addEventListener('click', function(){
    const file = uploadInput.files && uploadInput.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(e){
      avatarImg.src = e.target.result;
      avatarImg.alt = `Uploaded avatar for ${document.querySelector('[data-testid="test-user-name"]').textContent}`;
      uploadInput.value = '';
      uploadBtn.blur();
    };
    reader.readAsDataURL(file);
  });

  // allow Enter to apply from input
  avatarUrlInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ applyBtn.click(); }
  });
  uploadInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ uploadBtn.click(); }
  });

  // ensure social links are focusable
  document.querySelectorAll('a').forEach(a=>{
    a.setAttribute('tabindex','0');
  });

})();
