import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'title', headerName: '名稱', width: 300 },
  { field: 'location', headerName: '地點', width: 250 },
  { field: 'price', headerName: '票價', width: 200 },
];

function CGU_Datagrid() {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((item, index) => ({
          id: index,
          title: item.title,
          location: item.showInfo[0]?.location || '',
          price: item.showInfo[0]?.price || '',
        }));
        setRows(formatted);
        setFilteredRows(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error('載入失敗:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (keyword === '') {
      setFilteredRows(rows);
    } else {
      setFilteredRows(
        rows.filter(row => row.title.includes(keyword))
      );
    }
  }, [keyword, rows]);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        景點觀光展覽資訊
        <input
          type="text"
          placeholder="搜尋名稱"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          style={{ fontSize: 16, padding: '4px 8px' }}
        />
      </h1>

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          loading={loading}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default CGU_Datagrid;