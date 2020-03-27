const displayMemberInfo = (block) => {
  if (block.querySelector('.team__grid__inner-block')) { // checks if block already created
    return;
  }
  block.insertAdjacentHTML('afterbegin', `
    <div class="team__grid__inner-block">
      <div class="team__grid__inner-block_triangle"></div>
      <div class="team__grid__inner-block_main">
        <div class="team__grid__inner-block_title">
          <h4>AL RAYHAN</h4>
          <p>/ UI Designer</p>
        </div>
        <p class="team__grid__inner-block_body">Lorem Ipsum is not simply is  an action designer random text It has roots in a piece.</p>
        <div class="team__grid__inner-block_links-block">
          <a href="#" class="team__grid__inner-block_links-block_link">
            <i class="fa fa-facebook-f"></i>
          </a>
          <a href="#" class="team__grid__inner-block_links-block_link">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#" class="team__grid__inner-block_links-block_link">
            <i class="fa fa-globe"></i>
          </a>
          <a href="#" class="team__grid__inner-block_links-block_link">
            <i class="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>`
  );
}

const hideMemberInfo = (block) => {
  const deletedBlock = block.querySelector('.team__grid__inner-block');
  if (deletedBlock) { // checks if block exists
    deletedBlock.style.opacity = 0;
    setTimeout(() => {
      deletedBlock.remove();
    }, 200);
  }
}

export { displayMemberInfo, hideMemberInfo };
