export const getTimeAgo = (date: number) => {
    if (!date) {
      return '';
    }
    const diffDate = new Date(new Date().getTime() - date * 1000);
    const diffHours = diffDate.getUTCHours();
    if (diffHours < 24) {
      return `${diffDate.getUTCHours()} часов назад`
    } else {
      return new Date(date * 1000).toDateString();
    }
  }