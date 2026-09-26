export const formatDuration = (totalSeconds?: number) => {
  if (!totalSeconds) return '3:45';
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
};

export const formatDate = (value?: string) => {
  if (!value) return 'Recently';
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const getSourceLabel = (source: string) => {
  return source || 'Provider';
};
