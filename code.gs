/**
 * ClassAdmin - Google Apps Script Backend Entry Point
 * Menangani permintaan HTTP GET dan menampilkan halaman aplikasi utama.
 */

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('ClassAdmin - Aplikasi Administrasi Kelas Modern')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * Fungsi pembantu untuk memuat file partial (jika diperlukan pengembangan modul tambahan).
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}