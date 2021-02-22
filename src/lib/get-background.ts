export const getBackground = (type: string = ''): string => {
  switch (type) {
    case 'Clear':
      return 'https://images.unsplash.com/photo-1611427873781-91646cd610af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    case 'Clouds':
      return 'https://images.unsplash.com/photo-1564121391811-bfc9c2ac4837?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80';
    case 'Rain':
      return 'https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    case 'Snow':
      return 'https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80';
    case 'Drizzle':
      return 'https://images.unsplash.com/photo-1556485689-33e55ab56127?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    default:
      return 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80';
  }
};
