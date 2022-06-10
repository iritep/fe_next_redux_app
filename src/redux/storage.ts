import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => ({
  getItem(_key: never) {
    return Promise.resolve(null);
  },
  setItem(_key: never, value: never) {
    return Promise.resolve(value);
  },
  removeItem(_key: never) {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== `undefined`
    ? createWebStorage(`local`)
    : createNoopStorage();

export default storage;
