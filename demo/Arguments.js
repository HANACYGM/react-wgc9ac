const demo = {
  run(var1, ...var2) {
    // 用户 ${user.name} 未被授权执行 ${action} 操作。
    return `${var1},${var2}`
  }
}

export default demo