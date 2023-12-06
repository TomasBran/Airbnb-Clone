
package com.clonair.back.image.service.implementation;

import com.clonair.back.image.entity.Image;
import com.clonair.back.image.repository.ImageRepository;
import com.clonair.back.image.service.ImageService;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Data
@RequiredArgsConstructor
public class ImageServiceImp implements ImageService{

    private final ImageRepository imageRepository;
    
    /**
     * Recupera un obj imagen por el nombre
     *@param -id de la imagen
     *@return el obj imagen o null si no existe
     */
    @Override
    @Transactional(readOnly = true)
    public Image getOne(String id) throws Exception{
        if(id != null){
            Optional<Image> img = imageRepository.findById(id);
            if(img.isPresent()){
               return img.get();
            }
        }
        return null;
    }
    
    /**
     * Persiste un obj imagen
     *@param input del MultipartFile de la imagen
     *@return el obj imagen o null si no paso el MultipartFile como parametro
     */
    @Override
    @Transactional
    public Image saveOne(MultipartFile input) throws Exception {
        if (input != null) {
            Image img = new Image();                
            img.setMime(input.getContentType());
            img.setName(input.getOriginalFilename());
            img.setContent(input.getBytes());
            return imageRepository.save(img);            
        }
        return null;
    }
    
    /**
     * Actualiza un obj imagen
     *@param -input del MultipartFile de la imagen
     *@param -id id de la imagen a actualizar
     *@return el obj imagen o null si no paso el MultipartFile como parametro
     */
    @Override
    @Transactional
    public Image updateOne(MultipartFile input, String id) throws Exception {
        if (input != null) {
            try {
                Image img = new Image();
                if (id != null) {
                    Optional<Image> respuesta = imageRepository.findById(id);
                    if (respuesta.isPresent()) {
                        img = respuesta.get();
                    }
                }
                img.setMime(input.getContentType());
                img.setName(input.getOriginalFilename());
                img.setContent(input.getBytes());
                return imageRepository.save(img);
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        return null;
    }
    
    /**
     * Persiste una lista de obj imagen
     *@param -input del arreglo de MultipartFile de las imagenes,
     *@return la List de obj imagen o null si no paso el MultipartFile como parametro
     */
    @Override
    @Transactional
    public List<Image> saveMulti(MultipartFile[] input) throws Exception{
        if (input != null) {
            List<Image> images = new ArrayList<>();
            for (MultipartFile imageElem : input) {
                if(!imageElem.getContentType().contains("octet-stream")){
                    Image img = new Image();
                    img.setMime(imageElem.getContentType());
                    img.setName(imageElem.getOriginalFilename());
                    img.setContent(imageElem.getBytes());
                    images.add(imageRepository.save(img));
                }
            }
            return images;
        }
        return null;
    }    
    
    /**
     * Persiste una lista de obj imagen
     *@param -input del arreglo de MultipartFile de las imagenes,
     *@return la List de obj imagen o null si no paso el MultipartFile como parametro
     */
    @Override
    @Transactional
    public List<Image> filter(List<Image> imageRepo, String[] imageIds) throws Exception{
        for (String imgId : imageIds) {
            Optional<Image> imgRp = imageRepository.findById(imgId);
            if (imgRp.isPresent()) {
                Image img = imgRp.get();
                if(imageRepo.contains(img)){
                    imageRepo.remove(img);
                }
                delete(img.getId());
            }
        }
        return imageRepo;
    }
    
    /**
     * Elimina un obj imagen
     *@param id de la imagen 
     */
    @Override
    @Transactional
    public void delete(String id) throws Exception{
        Optional<Image> img = imageRepository.findById(id);
        if (img.isPresent()) {
            imageRepository.deleteById(id);
        }        
    }

    @Override
    @Transactional(readOnly = true)
    public String getUrl(String id) {
        Image image = imageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Image not found with ID: " + id));

        String base64EncodedImage = Base64.getEncoder().encodeToString(image.getContent());
        return "data:image/jpeg;base64," + base64EncodedImage;
    }

}
