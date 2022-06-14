import { useEffect } from 'react';
import { loadStories, widgetSelector } from '@/redux/slices';
import { useAppSelector, useAppDispatch } from '@/hooks';

export const useStoryData = () => {
  const dispatch = useAppDispatch();
  const { stories } = useAppSelector(widgetSelector);

  useEffect(() => {
    dispatch(loadStories({ page: 1, limit: 6 }));
  }, []);

  return {
    loading: stories.loading,
    data: stories.data,
    status: stories.status,
  };
};
