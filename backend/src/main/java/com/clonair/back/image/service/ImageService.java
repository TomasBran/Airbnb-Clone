
package com.clonair.back.image.service;

import com.clonair.back.image.entity.Image;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

public interface ImageService {
       
    public Image getOne(String id) throws Exception;
    
    public Image saveOne(MultipartFile input) throws Exception;
    
    public Image updateOne(MultipartFile input, String id) throws Exception;
    
    public List<Image> saveMulti(MultipartFile[] input) throws Exception;
    
    public List<Image> filter(List<Image> imageRepo, String[] imageIds) throws Exception;
    
    public void delete(String id) throws Exception;

    public String getUrl(String id);
    
}
