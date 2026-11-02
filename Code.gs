// ========================================================
// Google Apps Script — Code.gs
// Game: "Tarik Tambang KIMIA" (Kelas XII SMA)
// Created by: Yudiasandi Anna
// ========================================================
// Petunjuk Pemasangan:
// 1. Buat Google Spreadsheet baru di https://sheets.new
// 2. Beri nama spreadsheet, lalu klik menu: Extensions > Apps Script
// 3. Salin dan tempel (paste) seluruh isi kode ini ke editor Apps Script
// 4. Masukkan ID Spreadsheet Anda pada variabel SPREADSHEET_ID di bawah ini
//    (ID Spreadsheet dapat diambil dari URL browser di antara /d/ dan /edit)
// 5. Klik 'Deploy' (Terapkan) > 'New deployment' (Penerapan baru)
// 6. Pilih tipe: 'Web app' (Aplikasi web)
//    - Execute as: Me (email Anda)
//    - Who has access: Anyone (Siapa saja, bahkan anonim)
// 7. Klik Deploy, setujui izin akses akun Google, lalu salin URL Web App yang berakhiran /exec
// 8. Tempelkan URL tersebut ke variabel GOOGLE_SCRIPT_URL di dalam file index.html
// ========================================================

const SPREADSHEET_ID = 'MASUKKAN_ID_SPREADSHEET_DI_SINI';
const SHEET_NAME = 'Hasil Tarik Tambang Kimia';

function doPost(e) {
  try {
    const rawData = e.postData ? e.postData.contents : '{}';
    const data = JSON.parse(rawData);
    
    // Buka spreadsheet berdasarkan ID atau spreadsheet aktif
    let ss;
    if (SPREADSHEET_ID && SPREADSHEET_ID !== 'MASUKKAN_ID_SPREADSHEET_DI_SINI') {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } else {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    }
    
    let sh = ss.getSheetByName(SHEET_NAME);
    
    // Jika sheet belum ada, buat sheet baru dan buat header kolom
    if (!sh) {
      sh = ss.insertSheet(SHEET_NAME);
      const headers = [
        'Waktu Pelaksanaan', 
        'Pemain 1 (Biru)', 'Skor P1', 'Benar P1', 'Tarikan P1',
        'Pemain 2 (Merah)', 'Skor P2', 'Benar P2', 'Tarikan P2',
        'Level Awal', 'Pemenang', 'Refleksi Murid'
      ];
      sh.appendRow(headers);
      
      // Format header agar rapi
      const headerRange = sh.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#1e40af');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
      sh.setFrozenRows(1);
    }
    
    // Tambahkan data baris baru
    sh.appendRow([
      new Date(data.created_at || Date.now()),
      data.player1 || 'Pemain 1',
      Number(data.score1 || 0),
      Number(data.correct1 || 0),
      Number(data.pull1 || 0),
      data.player2 || 'Pemain 2',
      Number(data.score2 || 0),
      Number(data.correct2 || 0),
      Number(data.pull2 || 0),
      data.level || 'easy',
      data.winner || '',
      data.reflection || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Data berhasil disimpan ke Google Sheets' 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: String(err) 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('✅ API Tarik Tambang Kimia aktif dan siap menerima data.')
    .setMimeType(ContentService.MimeType.TEXT);
}
