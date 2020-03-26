const displayMemberInfo = (block) => {
  block.insertAdjacentHTML('afterbegin', `
    <div class="team__grid__inner-block">
      <div class="team__grid__inner-block_triangle"></div>
      <div class="team__grid__inner-block_main">
        <h4 class="team__grid__inner-block_title">AL RAYHAN</h4>
        <p class="team__grid__inner-block_subtitle">/ UI Designer</p>
        <p class="team__grid__inner-block_body">Lorem Ipsum is not simply is  an action designer random text It has roots in a piece.</p>
        <div class="team__grid__inner-block_links-block">
          <a href="#" class="team__grid__inner-block_links-block_link">
            <i class="fa fa-pinterest-p"></i>
          </a>
          <a href="#" class="team__grid__inner-block_links-block_link">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#" class="team__grid__inner-block_links-block_link">
            <i class="fa fa-facebook-f"></i>
          </a>
          <a href="#" class="team__grid__inner-block_links-block_link">
            <i class="fa fa-basketball-ball"></i>
          </a>
        </div>
      </div>
    </div>`
  )
}

const hideMemberInfo = (block) => {
  const deletedBlock = block.querySelector('.team__grid__inner-block');
  deletedBlock.remove()
}

export { displayMemberInfo, hideMemberInfo };
