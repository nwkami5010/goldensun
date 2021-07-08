import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';
import {useRecords} from 'hooks/useRecords';







const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

const defaultFormDate = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}
function Money() {
  const [selected ,setSelected] = useState(defaultFormDate);
  const onChange = (obj: Partial<typeof selected>)=> {
    setSelected({...selected, ...obj})
  }
  const {records,addRecord} = useRecords()
  const submit = () => {
    addRecord(selected);
    setSelected(defaultFormDate)
  }
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})} />
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})} />
      <NumberPadSection value={selected.amount}
                        onChange={amount=> onChange({amount})}
                        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;