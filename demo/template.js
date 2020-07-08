const demo = {
  run() {
    // 用户 ${user.name} 未被授权执行 ${action} 操作。
    let user = 'cygm';
    let action = 'create func'
    return (`
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      用户 ${user} 未被授权执行 ${action} 操作。
    `);
  }
}

export default demo