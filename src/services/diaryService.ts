import diaryData from '../../data/diaries'
import { DiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData

const getEntries = (): DiaryEntry[] => {
  return diaries
}

const addEntry = (): undefined => {
  return undefined
}

export default {
  getEntries,
  addEntry
}
