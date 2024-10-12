import { Allotment } from 'allotment';
import EditorArea from './components/EditorArea';
import MeterilArea from './components/MeterilArea';
import SettingArea from './components/SeetingArea';
import 'allotment/dist/style.css';

const Editor = () => {
  return (
    <div className="h-screen">
      <Allotment>
        <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
          <MeterilArea />
        </Allotment.Pane>

        <Allotment.Pane>
          <EditorArea />
        </Allotment.Pane>

        <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
          <SettingArea />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};

export default Editor;
