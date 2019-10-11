package application;

import javafx.scene.image.Image;



public interface ISymbol {
	void setImage(Image image);

	Image getImage();

	void setValue(int value);

	int getValue();
}
