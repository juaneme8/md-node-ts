import diaryData from '../../data/diaries'
import { DiaryEntry } from '../../types';

const diaries: Array<DiaryEntry> = diaryData;

const getEntries = ():Array<DiaryEntry> => {
  return diaries;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};