export const getUppercaseFirstLetter = (value) => {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours} : ${minutes.toString().padStart(2, '0')}`;
};
