import { Allotment } from 'allotment';
import 'allotment/dist/style.css';

const Editor = () => {
  return (
    <div className="h-screen">
      <Allotment>
        <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
          Meteril
        </Allotment.Pane>

        <Allotment.Pane>EditArea</Allotment.Pane>

        <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
          Seeting
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};

export default Editor;
