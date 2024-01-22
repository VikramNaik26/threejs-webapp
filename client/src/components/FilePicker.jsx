import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-col flex1">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => {
            // console.log(e.target.files[0].name)
            setFile(e.target.files[0])
          }}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-xs text-gray-500 truncate">
          {file === '' ? 'No file uploaded' : file.name}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />

        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}
export default FilePicker
